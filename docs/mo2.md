# Mod Organizer 2

In this step, we will install and configure Mod Organizer 2, the best mod manager for any Bethesda game and the only one supported for the guide.
### **Installing Mod Organizer 2**
1. Download [**Main File - Mod Organizer 2**](https://www.nexusmods.com/skyrimspecialedition/mods/6194?tab=files) using the **Manual Download** link and run the installer.
1. Choose any unoccupied install location outside of any default Window folders and outside of the game's **Root** folder (e.g. C:/Modding/Mod Organizer 2/).
1. Although it doesn't technically have to be installed on the same drive as the game, it is still recommended to install on an SSD if possible.
1. Click **Next** until the installer finishes.
### **Initial Setup**
1. Run **ModOrganizer.exe**
1. You will be prompted with a pop-up called **Creating an instance**, in which you should just select **Next**
1. On the next page, select **Create a global instance**



1. On the next page, select **TTW**



1. On the next page, keep the **Location** file path default

If you have MO2 installed on a drive with little space, you can check the **Show advanced options** box and change the **Downloads** file path to a different drive with more space. This will not affect download/game performance, and the downloads can be deleted after the mods have been installed.

6. On the last page, select **Finish**.
6. MO2 will launch and prompt you with a pop-up called **Show Guide?**, in which you should select **No**.
6. From the pop-up called **Register?**, select **Yes**.
   1. This pop-up will not show up if you have already registered a different instance of MO2.

If at any point you get a pop-up called **INI file is read-only**, select **Remember my choice** from the drop-down at the bottom then click **Clear the read-only flag**.
### **Configuring Settings**
1. If there is a plugin called **FalloutNV\_lang.esp** in the right pane of Mod Organizer 2, navigate to the game's **Data** folder and delete it.
   1. If you do not know what the game's **Data** folder is, read the Key Terminology section from the [Initial Setup](./setup.html#terms) page.

The translation plugin must be deleted because it directly edits 1000s of records to change the language, which will cause many incompatibilities with most mods.

2. Click the  button at the top of MO2 to open the settings.
2. In the **General** tab, enable **Compact list** and *disable* **Show menubar when pressing Alt**.
2. In the **Theme** tab, you can select a different style from the drop-down menu at the top.
   1. The Many: I use the **dracula** theme
   1. Audixas: I use **vs15 Dark-Green** for TTW
   1. VishVadeva50: I use **1809 Dark Mode**
   1. karut: For Linux users, the Fusion theme works best
2. In the **Nexus** tab, select **Connect to Nexus**.



1. This option will not show up if you have already connected your Nexus account on a different MO2 instance.
2. MO2 will open your browser and prompt you to authorize the connection.
2. Once you authorize it, you can close out of your browser and of the MO2 settings.
2. Allow MO2 to restart if it asks.
2. Select the  button at the top of MO2 to open the profiles menu.
2. Select the **Default** profile and make sure both **Use profile-specific Game INI Files** and **Automatic Archive Invalidation** are checked at the bottom.


### **Tweaking FalloutCustom.ini**
In this step, we will configure the game's INI files to increase performance/stability. We will take advantage of JIP LN NVSE's FalloutCustom.ini feature to make our changes, which allows for INI changes to be made safely without editing the default INIs. Because of this, these changes will not take affect until you install JIP LN NVSE in the [Utilities](./utilities.html#jip) step. It is highly recommended to avoid changing any other INI settings not in the guide, and to avoid using INI "optimization" tools like BethINI. The changes these will make are placebo at best and dangerous at worst. You will realistically not need any other tweaks than the ones already in the guide. 

1. Click the  button at the top of MO2 and select **INI Editor**.
1. Select the **FalloutCustom.ini** tab, which should be blank.
   1. Make sure you are in the **FalloutCustom.ini** tab and NOT the **Custom.ini** tab.
1. Paste in the following:


### **Mod Installation Advice**
If you are completely unfamiliar with Mod Organizer 2, I recommended watching [GamerPoet's video](https://www.youtube.com/watch?v=7v0wWVuOagA) about mod installation in MO2. As it was made for Skyrim, it has some information that does not apply to New Vegas, such as the Steam Workshop part which you can just ignore. However, the rest of the information about downloading/installing mods from Nexus still applies.

When the guide says to install a mod, it will be formatted as follows: **Main File - Example Mod 1.5**. This is referring to the mod's category on Nexus, the file name, and the file version. 



Unless instructed otherwise, simply download the listed file using the **Mod Manager Download** button and install it normally through MO2. If you do not know how to install mods through MO2, please watch the video linked above. Sometimes, a mod will not have a **Mod Manager Download**, or will be hosted on a site other than Nexus. If that is the case, do the following: 

1. Click the **Manual Download** button (or whatever the download button is for the respective site).
1. Once the download has finished, click the  button at the top of MO2 or use the CTRL + M shortcut.
1. From the new window, navigate to where the file was downloaded to and double-click it.
1. Finish the install normally.

When downloading multiple files from the same page, you will be prompted with a box in Mod Organizer 2 with the options **Merge**, **Replace**, and **Rename**. You should select the **Rename** option and rename the mod to its respective file name. This will make MO2 install them as separate files for easier management. If you are updating from an old version of a mod, you should select **Replace**. This will delete all the files from the old version of the mod and replace them,with the ones from the new version. This is the only time you should use the **Replace** option, otherwise always use **Rename**. 

If at any point during mod installation you get a message called **Extract BSA**, select **No**.[](./ttw.html)

[Continue to TTW Installation ](./ttw.html)

