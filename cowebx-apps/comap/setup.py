#!/usr/bin/env python
'''
Install script for cowebx apps. Requires prior install of Python coweb
server package and pycoweb script.

Copyright (c) The Dojo Foundation 2011. All Rights Reserved.
Copyright (c) IBM Corporation 2008, 2011. All Rights Reserved.
'''
import subprocess
import sys
import optparse
import os
import os.path

class SetupError(Exception): pass

def _symlink_path(srcRoot, target):
    for path in os.listdir(srcRoot):
        if path.startswith('.') or path == 'WEB-INF': continue
        src = os.path.abspath(os.path.join(srcRoot, path))
        dest = os.path.join(target, path)
        try:
            os.symlink(src, dest)
        except OSError:
            print('skipped: %s' % path)

def deploy(options, args):
    '''Deploys the sample apps and their widgets into coweb deploy dir.'''
    # invoke pycoweb to create an empty deployment 
    try:
        dest = args[1]
    except IndexError:
        raise SetupError('missing: destination path')

    if subprocess.call([
        'pycoweb', 'deploy', dest, 
        '-f' if options.force else '',
        '-t', 'src/main/python/run_server.tmpl']):
        raise SetupError('aborted: cowebx deploy')
    # copy the webapps into place
    cmd = 'cp -r src/main/webapp/* ' + os.path.join(dest, 'www/')
    subprocess.check_call(cmd, shell=True)

    if 1:
        # symlink bots into bots/
        target = os.path.join(dest, 'bots')
        rm(dest, 'bots')
        os.mkdir(target)
        srcRoot = 'src/main/python/bots'
        _symlink_path(srcRoot, target)
    else:
        # copy the bots into place
        cmd = 'cp -r src/main/python/bots/* ' + os.path.join(dest, 'bots/')
        subprocess.check_call(cmd, shell=True)

    # symlink moderator
    rm(dest, 'bin/moderator.py')
    ln(os.path.abspath('src/main/python/moderator.py'),
            os.path.join(dest, 'bin/moderator.py'))

    # copy the widgets / styles into place
    try:
        os.makedirs(os.path.join(dest, 'www/lib/cowebx'))
    except OSError:
        pass
    cmd = 'cp -r ../../cowebx-widgets/cowebx-widgets-dojo/src/main/webapp ' + \
          os.path.join(dest, 'www/lib/cowebx/dojo')
    subprocess.check_call(cmd, shell=True)

def rm(target, f):
    subprocess.call(["rm", "-rf", os.path.join(target, f)])

def ln(src, target):
    subprocess.call(["ln", "-s", src, target])

def clean(options, args):
    '''Cleans up the workpath files created by this script.'''
    try:
        dest= args[1]
    except IndexError:
        raise SetupError('missing: destination path')
    rm(dest, 'bin/run_server.py')
    rm(dest, 'www')
    rm(dest, 'bots')

def develop(options, args):
    '''Symlinks the apps and widgets into an existing developer env.'''
    try:
        targetRoot = args[1]
    except IndexError:
        raise SetupError('missing: destination path')

    # create container script
    bin = os.path.join(targetRoot, 'bin')
    script = os.path.join(bin, 'run_server.py')
    if subprocess.call([
        'pycoweb', 'container', script,
        '-f' if options.force else '',
        '-t', 'src/main/python/run_server.tmpl']):
        raise SetupError('aborted: cowebx develop')

    # symlink apps into www/
    target = os.path.join(targetRoot, 'www')
    os.mkdir(target)
    srcRoot = 'src/main/webapp/'
    _symlink_path(srcRoot, target)
    
    # symlink bots into bots/
    target = os.path.join(targetRoot, 'bots')
    os.mkdir(target)
    srcRoot = 'src/main/python/bots'
    _symlink_path(srcRoot, target)

    # Don't symlink cowebx widgets. Remove the following line to link widgets.
    pass
    # symlink widgets into www/lib/cowebx
    try:
        os.makedirs(os.path.join(targetRoot, 'www/lib/cowebx'))
    except OSError:
        pass
    target = os.path.join(targetRoot, 'www/lib/cowebx/dojo')
    src = os.path.abspath('../cowebx-widgets/cowebx-widgets-dojo/src/'
            'main/webapp')
    try:
        os.symlink(src, target)
    except OSError as e:
        print('skipped: cowebx-widgets-dojo')

if __name__ == '__main__':
    parser = optparse.OptionParser('usage: %prog <deploy|develop|clean> '
            '[options] <PATH>')
    parser.add_option('-f', '--force', dest='force', action='store_true',
            default=False,
            help='overwrite an existing file or folder (default: False)')
    (options, args) = parser.parse_args()

    try:
        func = globals()[args[0]]
    except Exception:
        parser.print_usage()
        sys.exit(255)
    try:
        func(options, args)
    except SetupError as e:
        print(e)
        sys.exit(1)