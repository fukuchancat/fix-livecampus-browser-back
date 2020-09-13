// ==UserScript==
// @name         fix livecampus browser back
// @description  総合ポータルシステム LiveCampusでブラウザバックを使えるようにする
// @author       fukuchan
// @match        *://a-portal.aichi-u.ac.jp/*
// @match        *://access.sit.ac.jp/*
// @match        *://campus.kyushu-ns.ac.jp/*
// @match        *://gakujo.shizuoka.ac.jp/*
// @match        *://idp.idm.kyutech.ac.jp/*
// @match        *://jlc.jumonji-u.ac.jp/*
// @match        *://ksuweb.kyusan-u.ac.jp/*
// @match        *://lc-nue.naruto-u.ac.jp/*
// @match        *://lc.brs.nihon-u.ac.jp/*
// @match        *://lc.nagoya-cu.ac.jp/*
// @match        *://lc.okiu.ac.jp/*
// @match        *://lc.s.kaiyodai.ac.jp/*
// @match        *://lc.sgk.ac.jp/*
// @match        *://lc.sun.ac.jp/*
// @match        *://livecampus.adb.fukushima-u.ac.jp/*
// @match        *://portal.bgu.ac.jp/*
// @match        *://siweb.iuk.ac.jp/*
// @match        *://tgulc.u-gakugei.ac.jp/*
// @match        *://vos-lc-web01.nagaokaut.ac.jp/*
// @match        *://www.lc.nishogakusha-u.ac.jp/*
// ==/UserScript==

// 通常のブラウザバックを無効化する
history.pushState(null, null, null);
window.onpopstate = () => {
  // DOM中の「戻る」ボタンを探す
  const buttons = [
    document.querySelector(".icon-back"),
    document.querySelector("h1 a")
  ].filter(button => button);

  // ボタンが見つかればクリック、見つからなければアラートを出す
  if (buttons.length) {
    buttons[0].click();
  } else {
    history.back();
  }
}
