# Utilities

### **First, create a "Utilities"  in MO2.** 
As you install the mods from this section, organize them underneath this separator.

All of the mods in this section are absolutely **essential** for the mods in the guide to function! Many mods in the following sections are optional, but make sure to get every Utility listed - they are all hard requirements.
### **Mods installed manually**
#### [**FNV 4GB Patcher**](https://www.nexusmods.com/newvegas/mods/62552)
Makes Fallout New Vegas 4GB aware and automatically loads NVSE if present.

1. Download the **Main File - 4GB Patcher** using the **Manual Download** button
1. From the downloaded archive, extract the **.exe** file to the game's **Root** folder
   1. If you do not know what the game's **Root** folder is, read the [Key Terminology](./setup.html#terms) section from the **Initial Setup** page
1. Right-click on **FNVpatch.exe** and select **Run as administrator**
1. A command prompt window will open and should say **FalloutNV.exe patched!**
1. Close the command prompt and a file named **FalloutNV\_backup.exe** should appear in the game's **Root** folder

From now on, you should run the game through the **Tale of Two Wastelands** option in MO2, rather than the **NVSE** option. The 4GB Patch automatically load NVSE when you run the game through the regular executable, which is generally the safer option.
#### [**xNVSE**](https://www.nexusmods.com/newvegas/mods/67883)
Expands the engine and scripting capabilities of Fallout New Vegas, fixing bugs and adding hundreds of new functions.

1. Download the **Main File - New Vegas Script Extender (NVSE)** using the **Manual Download** button
1. Extract the contents of the archive to the **Root** folder:

Despite the filename, **nvse\_steam\_loader.dll** **is still needed** with the GOG version of the game.

After proper install, your **Root Folder** should look like this: 
#### [**New Vegas Heap Replacer**](https://www.nexusmods.com/newvegas/mods/69779)
Replaces the in-game heap with a faster, more optimized version, reducing load times & stutter and slightly improving frame rate.

1. Download **Main File - NVHR** using the **Manual Download** button
1. Extract the contents of the archive to the game's **Root** folder 

By default, NVHR will create a terminal window every time the game is launched. This lets you know that the heap replacer has loaded successfully. If you would like the terminal to stop appearing, create a file named "d3dx9\_38.tmp" in the **Root** folder. This will not affect anything in-game. If you want the terminal to appear again, you can delete "d3dx9\_38.tmp".
#### [**Discord Rich Presence**](https://www.nexusmods.com/newvegas/mods/68976)
Shows your character info & what you're doing in-game on your Discord profile.

Obviously, if you don't use Discord or simply aren't interested then this particular mod can be skipped

1. Download the **Main File - Discord Rich Presence** using the **Manual Download** button
1. Extract the contents of the archive to the **Root** folder

### **Mods installed using MO2**
If you don't know what these instructions mean, return to the **Mod Installation Advice** at the bottom of the [MO2 section](./mo2.html) of the guide.

|**Mod Name**|**Description**|**Instructions**|
| :-: | :-: | :-: |
|[AnhNVSE](https://www.nexusmods.com/newvegas/mods/74012)|A script extender plugin for NVSE adding dozens of new functions to the game.|**Main File - AnhNVSE**|
|[Console Paste Support](https://www.nexusmods.com/newvegas/mods/65906)|Adds clipboard paste support, as well as ctrl left/right and backspace/delete to aid typing in console.|**Main File - Console Paste**|
|[Improved Console (NVSE)](https://www.nexusmods.com/newvegas/mods/70801)|Overcomes several limitations present in the vanilla console.|**Main File - Improved Console**|
|[JIP LN NVSE](https://www.nexusmods.com/newvegas/mods/58277)|An extension of NVSE adding 1000+ new functions, numerous engine bug fixes/tweaks, and restoreing several broken game features.|**Main File - JIP LN NVSE**|
|[JohnnyGuitar NVSE](https://www.nexusmods.com/newvegas/mods/66927)|xNVSE extender that adds new script functions, features and engine bug fixes.|**Main File - JohnnyGuitar NVSE**|
|[kNVSE Animation Plugin](https://www.nexusmods.com/newvegas/mods/71336)|Allows for custom animations to be loaded without overwriting, making it possible to use animations made specifically for certain weapons without affecting the others.|**Main File - kNVSE**|
|[lStewieAl's Tweaks](https://www.nexusmods.com/newvegas/mods/66347)|<p>Plugin with engine bugfixes, optional tweaks and new features with no performance impact. Fully customisable via in-game menu and INIs. </p><p>It cannot be overstated just how many different things this mod does & how many [mods it replaces/obsoletes](https://forums.nexusmods.com/index.php?/topic/10248968-mods-that-are-redundant-with-stewies-tweaks-list/). Always **check the Tweaks menu** before installing additional mods.</p>|<p>- **Main File - Stewie Tweaks**</p><p>- **Main File - [Stewie Tweaks Essentials INI](https://www.nexusmods.com/newvegas/mods/76522)**</p><p>- Configured via **Settings/Tweaks** in the title/pause menu </p><p>&emsp;- Changes made from this in-game menu require a game restart to take effect</p>|
|[Combat Lag Fix (NVSE)](https://www.nexusmods.com/newvegas/mods/71973)|Improves framerate in combat by fixing an engine bug that lowered framerate while attacking an enemy with a health-bar visible.|**Main File - Fast Weapon Lag Fix**|
|[Mod Limit Fix](https://www.nexusmods.com/newvegas/mods/68714)|Greatly increases the plugin limit by fixing a vanilla bug. Improves performance, even if you are nowhere near the limit.|**Main File - MLF**|
|[New Vegas Tick Fix](https://www.nexusmods.com/newvegas/mods/66537)|Allows New Vegas to run above 60fps without physics issues, while reducing stuttering and increasing performance.|<p>- **Main File - NVTF**</p><p>- **Guide File - [NVTF Fonfig](./dl/NVTF Fonfig.7z)** </p><p>&emsp;- Install from archive and place under Fonfig separator</p><p>If you don't have a Fonfig separator yet, create it now. It should go below all your other separators</p><p>NVTF's memory patches disable Alt-Tab functionality. Follow the [Perfomance Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#NVTF) for solution.</p>|
|[ShowOff NVSE](https://www.nexusmods.com/newvegas/mods/72541)|An NVSE plugin which adds new functions, as well as some engine-level tweaks.|<p>- **Main File - ShowOff NVSE**</p><p>- **Main File - ShowOff INI**</p>|
|[TTW NVSE](https://www.nexusmods.com/newvegas/mods/77415)|Currently known as "ROOG NVSE", this NVSE plugin is required for TTW to function properly.|**Main File - TTW NVSE**|
|[yGTM - Gameplay Tweaks and Madness](https://www.nexusmods.com/newvegas/mods/72784)|NVSE plugin that alters, restores and changes gameplay features. |**Main File - yGTM**|
### **Testing Utilities**
1. Launch the game using the **Tale of Two Wastelands** option in MO2 (**NOT** the **NVSE** option).
1. Once the game has reached the main menu, hit the ~ key (above the tab key) to open the console.
1. Enter GetNVSEVersion, and the console should print NVSE version: 6
   1. If not, [xNVSE](./utilities.html) is installed incorrectly.
1. Next, enter GetIsLAA, and the console should print GetIsLAA >> 2
   1. If it prints >> 0, then the [4GB Patch](./utilities.html) was applied incorrectly.
   1. If it prints an error message, then [JIP LN NVSE](./utilities.html) is installed incorrectly.
1. Next, enter IsDLLLoaded d3dx9\_38, and the console should print IsDLLLoaded "d3dx9\_38.dll" >> 1
   1. If it prints >> 0, then [Heap Replacer](./utilities.html) is installed incorrectly.
   1. If it prints an error message, then [JohnnyGuitar NVSE](./utilities.html) is installed incorrectly.
1. Next, enter IsDLLLoaded NVTF, and the console should print IsDLLLoaded "nvtf.dll" >> 1
   1. If not, then [NVTF](./utilities.html) is installed incorrectly.
1. Next, enter IsDLLLoaded mlf, and the console should print IsDLLLoaded "mlf.dll" >> 1
   1. If not, then [Mod Limit Fix](./utilities.html) is installed incorrectly.

Before clicking the following continue link, you should make sure you passed all of the preceding tests! The Utilities in this section of the guide are required for optimal performance and stability.[](./ui.html)

[Continue to User Interface & HUD ](./ui.html)

