    const createTab = document.getElementById("createTab");
    
    createTab.addEventListener('click', async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      await chrome.sidePanel.setOptions({
        tabId: tab.id,
       path: 'sidepanel/simpliplay.html',
        enabled: true
      });

      await chrome.sidePanel.open({ tabId: tab.id });
    });