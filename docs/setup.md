# Game Setup

In this step, we will do clean installations and configurations of the games, which is **required for the guide**.

### **Required Installation Location**
A **clean installation** is required to get rid of any potential leftover mod files & to make sure the game is installed in a safe location:

- **Avoid any default Windows folders:** This includes but is not limited to `C:\Program Files`, `C:\Program Files x86`, your `Desktop`, and your `Documents` folders. This is due to Windows UAC (or User Account Control), which heavily monitors and protects these folders. This can cause many issues with the game and any modding tools. An example of a safe location would be `C:\Games\Steam`.
- **Install on an SSD if possible:** This will dramatically improve load times and decrease stuttering.
- **Fallout 3 Installation:** Identical to New Vegas, so it also needs to be installed outside of any default Windows folders as outlined above.
### Uninstalling the Games
If you do not have the game installed yet, skip this step. Otherwise, follow the instructions pertaining to whichever store you purchased the games from.

#### Steam Users:
1. Open Steam and go to your **Library**.
2. Find **Fallout: New Vegas** in the list.
3. Right-click on it and select **Manage > Uninstall**.
4. Navigate to `Steam\steamapps\common` and, if present, delete the **Fallout New Vegas** folder.
5. Navigate to `Documents\My Games\FalloutNV` and delete all the **INI** files.
6. Repeat for **Fallout 3**.

#### GOG Users:
1. Open GOG Galaxy and go to your **Library**.
2. Find **Fallout: New Vegas** in the list.
3. Right-click on it and select **Manage Installation > Uninstall**.
4. Navigate to where the game is installed (`GOG Galaxy\Games` by default) and, if present, delete the **Fallout New Vegas** folder.
5. Navigate to `Documents\My Games\FalloutNV` and delete all the **INI** files.
6. Repeat for **Fallout 3**.

### **New Steam Library**
If your game is not from Steam, skip this step.

A new Steam library needs to be set up to install the game into, as the default library is in a default Windows UAC-protected folder (`C:\Program Files x86\Steam`).

1. Open Steam and select **Steam > Settings** in the top left
1. In the **Downloads** tab, select **Steam Library Folders**
1. Select **Add Library Folder** and select a location outside of any default Windows folders
   1. For example, `C:/Games/Steam`

**IMPORTANT:** By default, Steam only allows one library per drive, but there is a workaround. If for example you already have the default Steam library at `C:\Program Files x86\Steam`, but still want your game on your `C:\` drive, you will need to follow [these](https://github.com/LostDragonist/steam-library-setup-tool/wiki/Usage-Guide) instructions to do so.

4. Exit out of the settings when you are finished
### **Installing the Games**

|**Steam**|**GOG**|
| :-: | :-: |
|1. Open Steam and go to your **Library**.2. Find **Fallout: New Vegas** in the list and select **Install**.3. From the install pop-up, set the location for install to the Steam library you just created in the previous step.4. Select **Next** then wait for the install to finish.5. Repeat for **Fallout 3**.|1. Open GOG and go to your **Library**.2. Find **Fallout: New Vegas** in the list and select **Install**.3. Set the **Install to** location to a folder outside of any default Windows folders.&emsp;o For example, C:/Games/GOG4. Repeat for **Fallout 3**.|
### **Key Terminology**
Now that the game is installed, there are two folders from it that will be referred to in the guide often:

|**Steam**|**GOG**|
| :-: | :-: |
|- **Root** folder: Where the game is installed.&emsp;- Steam\steamapps\common\Fallout New Vegas- **Data** folder: Where all of the game's assets are located.&emsp;- Steam\steamapps\common\Fallout New Vegas\Data|- **Root** folder: Where the game is installed.&emsp;- GOG Galaxy\Games\Fallout New Vegas (Unless you manually changed the installation path)- **Data** folder: Where all of the game's assets are located.&emsp;- GOG Galaxy\Games\Fallout New Vegas\Data|
### **Post-Installation**
#### **Enabling File Extensions**
By default, File Explorer will not show file extensions (such as .exe, .dll, or .esp). These extensions are very important when going through the guide, so it is highly recommended to enable file extensions:

1. Open File Explorer from the Start Menu, from your desktop, or with the keyboard shortcut **+ E**.
1. Select the **View** tab at the top.
1. Check the box next to **File name extensions**.


#### **Generating Fresh .INI Files**
**For New Vegas:**

1. Run the game through Steam/GOG.
1. Click OK to both pop-ups that say **Detecting Video Hardware**.
   1. If there aren't any pop-ups, navigate to Documents\My Games\FalloutNV and delete all the files ending in **.INI**, then retry.
1. Select **Options** then select either the **High** or **Ultra** preset option.
1. Set the **Resolution** option to your preference (The launcher usually does not set it to your monitor's max resolution).
1. Click **OK** then **Exit**.

**For Fallout 3:**

1. Run the game through Steam/GOG.
1. Click OK to both the pop-ups that say **Detecting Video Hardware**.
   1. If there aren't any pop-ups, navigate to Documents\My Games\Fallout3 and delete all the files ending in **.INI**, then retry.
1. Exit the launcher.[](./mo2.html)

[Continue to Mod Organizer 2](./mo2.html) 

Guide created by [](./contributors.html)[WSG contributors](./contributors.html), do not reproduce without permission.
