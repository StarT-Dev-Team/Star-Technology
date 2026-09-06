import sys, os, re

def getPanoramaNames(folder):
    panoramaDirs = os.listdir(folder)
    panoramaNames = []

    for panoramaFolder in panoramaDirs:
        propertiesFileAdress = os.path.abspath(os.path.join(folder, panoramaFolder, 'properties.txt'))
        if (not os.path.isfile(propertiesFileAdress)):
            print(f'[ERROR]: Could not find properties file at adress: \'{propertiesFileAdress}\'')
            continue

        propertiesFile = open(propertiesFileAdress)
        propertiesContent = propertiesFile.read()
        propertiesFile.close()

        panoramaName = re.findall('name = (.*)', propertiesContent)[0]
        panoramaNames.append(panoramaName)

    return panoramaNames

def allowFancyMenuEditing(bool):
    optionsDir = os.path.abspath(os.path.join(fancyMenuFolder, 'options.txt'))

    optionsFileRead = open(optionsDir)
    optionsContent = optionsFileRead.read()
    optionsFileRead.close()

    settingDefaultTrue = 'true' if bool else 'false'
    settingDefaultFalse = 'false' if bool else 'true'

    optionsContent = re.sub(f'B:modpack_mode = \'{settingDefaultTrue}\';', f'B:modpack_mode = \'{settingDefaultFalse}\';', optionsContent)
    optionsContent = re.sub(f'B:show_customization_overlay = \'{settingDefaultFalse}\';', f'B:show_customization_overlay = \'{settingDefaultTrue}\';', optionsContent)

    newLayoutFile = open(optionsDir, 'w')
    newLayoutFile.write(optionsContent)
    newLayoutFile.close()

def deleteAllLayouts(folder):
    layoutFiles = os.listdir(folder)
    layouts = 0

    for layoutFile in layoutFiles:
        fileAdress = os.path.abspath(os.path.join(folder, layoutFile))
        if (not os.path.isfile(fileAdress)):
            print(f'[ERROR]: Could not find properties file at adress: \'{fileAdress}\'')
            continue
        os.remove(fileAdress)
        layouts += 1

    return layouts

def setUpDevLayout(layoutPath):
    templateAdress = os.path.abspath(os.path.join(currentDir, 'title_screen_layout_dev.txt'))
    newLayoutAdress = os.path.abspath(os.path.join(layoutPath, 'title_screen_layout_dev.txt'))

    templateFile = open(templateAdress)
    templateContent = templateFile.read()
    templateFile.close()

    newLayoutFile = open(newLayoutAdress, 'w')
    newLayoutFile.write(templateContent)
    newLayoutFile.close()

def setUpTemplateLayout(layoutPath):
    editedTemplateAdress = os.path.abspath(os.path.join(layoutPath, 'title_screen_layout_dev.txt'))
    templateStorageAdress = os.path.abspath(os.path.join(currentDir, 'title_screen_layout_dev.txt'))

    editedLayout = open(editedTemplateAdress)
    editedLayoutContent = editedLayout.read()
    editedLayout.close()

    layoutStorage = open(templateStorageAdress, 'w')
    layoutStorage.write(editedLayoutContent)
    layoutStorage.close()

    os.remove(editedTemplateAdress)

def createLayouts(layoutPath, allPanoramaNames):
    templateAdress = os.path.abspath(os.path.join(currentDir, 'title_screen_layout_dev.txt'))

    templateFile = open(templateAdress)
    templateContent = templateFile.read()
    templateFile.close()

    layouts = 0

    for panoramaName in allPanoramaNames:
        newLayout = re.sub('panorama_name = ([a-z_0-9]*)', f'panorama_name = {panoramaName}', templateContent)

        layoutName = re.findall('([a-z]*(?:_[0-9]+)?)(?:_.*)?', panoramaName)[0]
        newLayoutAdress = os.path.abspath(os.path.join(layoutPath, f'title_screen_layout_{layoutName}.txt'))

        newLayoutFile = open(newLayoutAdress, 'w')
        newLayoutFile.write(newLayout)
        newLayoutFile.close()
        layouts += 1

    return layouts

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
    print(f"[Error] Could not find pack directory from {currentDir}")

fancyMenuFolder = os.path.abspath(os.path.join(mainDir, 'config', 'fancymenu'))

def runLayoutMaker():
    panoramaPath = os.path.abspath(os.path.join(fancyMenuFolder, 'panoramas'))
    layoutPath = os.path.abspath(os.path.join(fancyMenuFolder, 'customization'))

    panoramaNames = getPanoramaNames(panoramaPath)
    layouts = createLayouts(layoutPath, panoramaNames)
    print(f'Created or adjusted {layouts} layouts')

def setupDevEnv():
    layoutPath = os.path.abspath(os.path.join(fancyMenuFolder, 'customization'))

    layouts = deleteAllLayouts(layoutPath)
    print(f'Deleted {layouts} layouts')

    setUpDevLayout(layoutPath)
    print('Added dev layout')
    
    allowFancyMenuEditing(True)
    print('Enabled Fancy Menu editing')

def closeDevEnv():
    layoutPath = os.path.abspath(os.path.join(fancyMenuFolder, 'customization'))

    setUpTemplateLayout(layoutPath)
    print('Changed template layout')

    allowFancyMenuEditing(False)
    print('Disabled Fancy Menu editing')

    runLayoutMaker()

menu = '''============[Fancy Menu Tools]============
Please select tool:
- 1: Create layouts for all panoramas
- 2: Set up dev environment (allow editing and use template layout)
- 3: Close dev environment (Save template changes, execute 1)

- X: close

'''

def runProgram():
    command = input(menu)

    match command:
        case '1':
            runLayoutMaker()
        case '2':
            setupDevEnv()
        case '3':
            closeDevEnv()
        case 'x':
            1 == 1
        case _:
            print('Input not recognized')

    if (not command.lower() == 'x'):
        repeat = input('Return to menu? Y/N\n')

        if (repeat.lower() == 'y'): runProgram()

runProgram()