// 等待HTML解析完成

try {
  console.log('插件被加载')
  handle()
} catch () {
  window.addEventListener('load', () => {
    handle()
  })
}

function handle() {
  document.querySelector('a.option-box.sidecolumn.sidecolumn-show').click()
  let adSelector = ['.toolbar-advert', '#footerRightAds']

  for (let i = 0; i < adSelector.length; i++) {
    let adContainer = document.querySelector(adSelector[i])
    // adContainer&&    adContainer.style.display = 'none'
    if (adContainer) {
      // adContainer.style.display = 'none'
      adContainer.parentNode.removeChild(adContainer)
    }
  }
}