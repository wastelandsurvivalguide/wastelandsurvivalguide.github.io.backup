[Intro](./index.html) [Game Setup](./setup.html) [MO2 Setup](./mo2.html) [TTW Setup](./ttw.html) [Utilities](./utilities.html) [UI/HUD](./ui.html) [Gameplay](./gameplay.html) [Content](./content.html) [Homes](./homes.html) [Overhauls](./overhauls.html) [Visuals](./visuals.html) [Animations](./animations.html) [Finish](./finish.html) [Appendix](./appendix.html)
# [**Wasteland Survival Guide**](./index.html)
## **Game Setup**

In this step, we will do clean installations and configurations of the games, which is **required for the guide**.

It is imperative to install TTW on **clean installs** of both games outside of UAC folders, as the following steps describe. Skip this section at your own peril; support will not be provided for incorrectly installed games.
### **Required Installation Location**
A clean installation is not only required to get rid of any potential leftover mod files, but also to make sure the game is installed in a safe location. Here is what you need to know when choosing where to install your game: 

- **Avoid any default Windows folders:** This includes but is not limited to C:\Program Files, C:\Program Files x86, your Desktop, and your Documents folders. This is due to Windows UAC (or User Account Control), which heavily monitors and protects these folders. This can cause many issues with the game and any modding tools. As an example of a safe location, my Steam directory is C:\Games\Steam
- **Install on an SSD if possible:** Having the game on an SSD will drastically improve load times and decrease stuttering. The game plus the guide should only take up about 30GB of space, but the importance of having extra free space on your drive should not be understated. Drives will generally performance worse as they get more full, so you won't see as much of an improvement with load times and stuttering with a full drive.
- **Fallout 3 Installation:** Like New Vegas, it also needs to be installed outside of any default Windows folders as outlined above.
### **Uninstalling the Games**
If you do not have the game installed yet, skip this step.

As the game is available on both Steam and GOG, there are separate instructions here for each version. You obviously only need to follow the directions for the version you have.

|**Steam**|**GOG**|
| :-: | :-: |
|<p>1. Open Steam and go to your **Library**.</p><p>2. Find **Fallout: New Vegas** in the list.</p><p>3. Right-click on it and select **Manage     Uninstall**.</p><p>4. Navigate to Steam\steamapps\common\ and, if present, delete the **Fallout New Vegas** folder.</p><p>5. Navigate to Documents\My Games\FalloutNV and delete all the **INI** files.</p><p>6. Repeat for **Fallout 3**.</p>|<p>1. Open GOG and go to your **Library**.</p><p>2. Find **Fallout: New Vegas** in the list.</p><p>3. Right-click on it and select **Manage Installation     Uninstall**.</p><p>4. Navigate to where the game is installed (GOG Galaxy\Games by default) and, if present, delete the **Fallout New Vegas** folder.</p><p>5. Navigate to Documents\My Games\FalloutNV and delete all the **INI** files.</p><p>6. Repeat for **Fallout 3**.</p>|
### **Making a New Steam Library**
If you already have a Steam library set up outside of any default Windows folder, or you have the game on GOG, skip this step.

A new Steam library needs to be set up to install the game on, as the default library is in a default Windows UAC-protected folder (C:\Program Files x86\Steam).

1. Open Steam and select **Steam     Settings** in the top left
1. In the **Downloads** tab, select **Steam Library Folders**
1. Select **Add Library Folder** and select a location outside of any default Windows folders
   1. For example, C:/Games/Steam

**IMPORTANT:** By default, Steam only allows one library per drive, but there is a workaround. If for example you already have the default Steam library at C:\Program Files x86\Steam, but still want your game on your C:\ drive, you will need to follow [these](https://github.com/LostDragonist/steam-library-setup-tool/wiki/Usage-Guide) instructions to do so.

4. Exit out of the settings when you are finished
### **Installing the Games**

|**Steam**|**GOG**|
| :-: | :-: |
|<p>1. Open Steam and go to your **Library**.</p><p>2. Find **Fallout: New Vegas** in the list and select **Install**.</p><p>3. From the install pop-up, set the location for install to the Steam library you just created in the previous step.</p><p>4. Select **Next** then wait for the install to finish.</p><p>5. Repeat for **Fallout 3**.</p>|<p>1. Open GOG and go to your **Library**.</p><p>2. Find **Fallout: New Vegas** in the list and select **Install**.</p><p>3. Set the **Install to** location to a folder outside of any default Windows folders.</p><p>&emsp;o For example, C:/Games/GOG</p><p>4. Repeat for **Fallout 3**.</p>|
### **Key Terminology**
Now that the game is installed, there are two folders from it that will be referred to in the guide often:

|**Steam**|**GOG**|
| :-: | :-: |
|<p>- **Root** folder: Where the game is installed.</p><p>&emsp;- Steam\steamapps\common\Fallout New Vegas</p><p>- **Data** folder: Where all of the game's assets are located.</p><p>&emsp;- Steam\steamapps\common\Fallout New Vegas\Data</p>|<p>- **Root** folder: Where the game is installed.</p><p>&emsp;- GOG Galaxy\Games\Fallout New Vegas (Unless you manually changed the installation path)</p><p>- **Data** folder: Where all of the game's assets are located.</p><p>&emsp;- GOG Galaxy\Games\Fallout New Vegas\Data</p>|
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
