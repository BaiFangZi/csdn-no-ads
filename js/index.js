// 等待HTML解析完成
window.addEventListener('load', () => {
  console.log('插件被加载')
  let adSelector = ['.toolbar-advert', '#footerRightAds']

  for (let i = 0; i < adSelector.length; i++) {
    let adContainer = document.querySelector(adSelector[i])
    // adContainer&&    adContainer.style.display = 'none'
    if (adContainer) {
      // adContainer.style.display = 'none'
      adContainer.parentNode.removeChild(adContainer)
    }
  }
})
