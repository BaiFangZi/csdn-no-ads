// 等待HTML解析完成

try {
  console.log('插件被加载')
  handle()
} catch (err) {
  console.log(err)
  window.addEventListener('load', () => {
    handle()
  })
}

function handle() {
  // 直接隐藏侧边栏
  document.querySelector('a.option-box.sidecolumn.sidecolumn-hide').click()
  // 不便利查询了
  // let adSelector = ['.toolbar-advert', '#footerRightAds', '#recommendAdBox', '.programmer1Box']

  // for (let i = 0; i < adSelector.length; i++) {
  //   let adContainer = document.querySelector(adSelector[i])
  //   // adContainer&&    adContainer.style.display = 'none'
  //   if (adContainer) {
  //     // adContainer.style.display = 'none'
  //     adContainer.parentNode.removeChild(adContainer)
  //   }
  // }
}