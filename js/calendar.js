jQuery(document).ready(function () {
    var ua = navigator.userAgent;
    if (ua.includes("iPhone") || ua.includes("iPad") || ua.includes("Macintosh")) {
      $.ajax({
        url: "/notification.ics",
        xhrFields: {
          // 將回傳結果以 Blob ，也就是保持原本二進位的格式回傳
          responseType: "blob"
        }
      }).done((data) => {
        // 這邊一定要用原生的 document.createElement
        // jQuery 沒辦法真的模擬原生的 click event
        const $a = document.createElement("a")
        // 給下載回來的資料產生一個網址
        const url = URL.createObjectURL(data)
        // 設定下載的檔名
        $a.download = "notification.ics"
        // 設定網址
        $a.href = url
        // 模擬使用者按下連結
        $a.click()
        // 5 秒後清除產生的網址，這時候使用者應該按下了下載的按鈕了
        // 不清除的話會造成記憶體的浪費，這不會中斷使用者的下載
        // 不過若你下載完就要跳轉到下一頁的話，其實這個可以不用
        setTimeout(() => URL.revokeObjectURL(url), 5000),
        window.close()
      })
    } else {
        window.location = "https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&text=%E5%86%A0%E5%84%92%26%E5%AE%9C%E5%A6%82%E7%B5%90%E5%A9%9A%E5%96%9C%E5%AE%B4&dates=20201219T120000%2F20201219T150000&details=%3Ca%20href%3D%22https%3A%2F%2Fg.page%2FPengYuanBade%22%3E%E5%85%AB%E5%BE%B7%E5%BD%AD%E5%9C%92%E6%9C%83%E9%A4%A8%E5%9C%B0%E5%9C%96%3C%2Fa%3E%0A%E6%A1%83%E5%9C%92%E5%B8%82%E5%85%AB%E5%BE%B7%E5%8D%80%E4%BB%8B%E5%A3%BD%E8%B7%AF%E4%B8%80%E6%AE%B5728%E8%99%9F3%E6%A8%93%28%E5%BB%A3%E8%B1%90%E6%96%B0%E5%A4%A9%E5%9C%B0%E5%85%A7%29%0A%E6%9C%83%E9%A4%A8%E8%BB%8A%E4%BD%8D%E6%9C%89%E9%99%90%EF%BC%8C%E5%BB%BA%E8%AD%B0%E6%8F%90%E6%97%A9%E6%8A%B5%E9%81%94~&location=%E5%85%AB%E5%BE%B7%E5%BD%AD%E5%9C%92%E6%9C%83%E9%A4%A8%20B%E5%BB%B3&trp=true";
    }
});