jQuery(document).ready(function () {
    var ua = navigator.userAgent;
    if (ua.includes("iPhone") || ua.includes("iPad") || ua.includes("Macintosh")) {
        window.location = "webcal://p34-caldav.icloud.com/published/2/ODIzMDgxNzQxNTgyMzA4MScUG9pLgV-HrDfTP9l2YcJJiqotmLuGGwda8v4nZbjYs4G4L07jhWJCwULkpV5TX63sgFbxl-aLsPj1cXD1dVk";
    } else {
        window.location = "http://www.google.com/calendar/event?action=TEMPLATE&text=%E5%86%A0%E5%84%92%26%E5%AE%9C%E5%A6%82%E7%B5%90%E5%A9%9A%E5%96%9C%E5%AE%B4&dates=20201219T120000%2F20201219T150000&details=%3Ca%20href%3D%22https%3A%2F%2Fg.page%2FPengYuanBade%22%3E%E5%85%AB%E5%BE%B7%E5%BD%AD%E5%9C%92%E6%9C%83%E9%A4%A8%E5%9C%B0%E5%9C%96%3C%2Fa%3E%0A%E6%9C%83%E9%A4%A8%E8%BB%8A%E4%BD%8D%E6%9C%89%E9%99%90%EF%BC%8C%E5%BB%BA%E8%AD%B0%E6%8F%90%E6%97%A9%E6%8A%B5%E9%81%94~&location=%E5%85%AB%E5%BE%B7%E5%BD%AD%E5%9C%92%E6%9C%83%E9%A4%A8&trp=true";
    }
});

$("#button").click(function(){
    window.close();
});