import shutil, os
from pathlib import Path
version = 0.1
print(f"""
BEANSITE PACKAGE BUILDER
M1dnightDev (c) 2023
Version {version}
""")
versionName = input("Please input the version number of this release: ")
versionName = versionName.lower().replace('v','')

path = f'{Path().parent.absolute()}'

shutil.make_archive(f"{str(Path.home() / 'Downloads')}/beansite95-v{versionName}", 'zip', path)

print('Compiled Successfully!')
