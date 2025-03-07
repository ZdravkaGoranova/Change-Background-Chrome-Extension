chrome.action.onClicked.addListener(tab => {
    chrom.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert('Hello from my extention!')
        }
    })
})