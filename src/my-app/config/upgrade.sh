#!/bin/bash
#
# Config Upgrades
#
# ref: https://www.macs.hw.ac.uk/~hwloidl/Courses/LinuxIntro/x984.html
#
# Usage:
# non-recurring, make it executable
# chmod a+x src/my-app/config/upgrade.sh
# run the following each time; in this case, to upgrade from v03 to v04
# ./src/my-app/config/upgrade.sh v03 v04
# -----------------------------------------------------------------------------
# run the script while in the following directory
# cd dropbox/swap/fuse
cd $1
cpio -u --create < src/my-app/config/xfer.txt | (cd ../$2 && cpio --extract)
cd ..
mkdir $2/src/my-app/
cp -r $1/src/my-app/ $2/src/my-app/
chmod a+x $2/src/my-app/config/upgrade.sh