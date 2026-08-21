import sys, os

currentDir = os.path.abspath(os.path.dirname(sys.argv[0]))

mainDir = currentDir
dirAttempts = 0

while dirAttempts < 20:
    newPath = os.path.abspath(os.path.join(mainDir, 'kubejs'))
    if (os.path.isdir(newPath)):
        break
    else:
        mainDir = os.path.dirname(mainDir)
        dirAttempts += 1

if (not dirAttempts < 20):
    print(f'[Error] Could not find pack directory from "{currentDir}"')

serverscriptFolder = os.path.abspath(os.path.join(mainDir, 'kubejs', 'server_scripts'))

def createDebugFiles(folder, trace, index):
    if (index > 10):
        print(f'[Error] Dove to deep into folders at dir: "{folder}"')
        return

    modifiedDirectories = 0
    scriptDirs = os.listdir(folder)

    for script in scriptDirs:
        filePath = os.path.abspath(os.path.join(folder, script))
        if (os.path.isdir(filePath)):
            modifiedDirectories += createDebugFiles(filePath, f'{trace}/{script}', index + 1)

    debugFileAdress = os.path.abspath(os.path.join(folder, 'x_debug.js'))
    debugFile = open(debugFileAdress, 'w')
    debugFile.write(f'''ServerEvents.recipes((event) => {{\n    console.log(\'Succesfully handled folder "{trace}"\');\n}});\n''')
    debugFile.close()

    modifiedDirectories += 1

    if (index == 0): print(f'Added debug files to {modifiedDirectories} directories')
    else: return modifiedDirectories

def createDebugFilesMenu(): 
    createDebugFiles(serverscriptFolder, '', 0)

def deleteDebugFiles(folder, index):
    if (index > 10):
        print(f'[Error] Dove to deep into folders at dir: "{folder}"')
        return

    modifiedDirectories = 0
    scriptDirs = os.listdir(folder)

    for script in scriptDirs:
        filePath = os.path.abspath(os.path.join(folder, script))
        if (os.path.isdir(filePath)):
            modifiedDirectories += deleteDebugFiles(filePath, index + 1)

    debugFileAdress = os.path.abspath(os.path.join(folder, 'x_debug.js'))

    if (not os.path.isfile(debugFileAdress)):
        print(f'[ERROR]: Could not find debug file at adress: \'{debugFileAdress}\'')
        return 0
    
    os.remove(debugFileAdress)
    modifiedDirectories += 1

    if (index == 0): print(f'Removed debug files to {modifiedDirectories} directories')
    else: return modifiedDirectories

def deleteDebugFilesMenu(): 
    deleteDebugFiles(serverscriptFolder, 0)

menu = '''============[Debug File Tools]============
Please select tool:
- 1: Create Debug files for all directories
- 2: Remove Debug files for all directories

- X: close

'''

def runProgram():
    command = input(menu)

    match command:
        case '1':
            createDebugFilesMenu()
        case '2':
            deleteDebugFilesMenu()
        case 'x':
            1 == 1
        case _:
            print('Input not recognized')

    if (not command.lower() == 'x'):
        repeat = input('Return to menu? Y/N\n')

        if (repeat.lower() == 'y'): runProgram()

runProgram()