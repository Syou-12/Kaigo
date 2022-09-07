$(function () {
    // liの数を取得
    const listItems = $(".accordion li").length;
    $(".accordion").each(function () {
      // 最初に表示させるliの数
      let num = 2,
        // 閉じた時に表示させるliの数
        closeNum = num - 1;
      // 最初はもっと見るボタン表示、閉じるボタン非表示
      $(this).find(".btn-more").show();
      $(this).find(".btn-close").hide();
      // 5行目まで表示
      $(this)
        .find("li:not(:lt(" + num + "))")
        .hide();
      // もっと見るボタンがクリックされた時
      $(".btn-more").click(function () {
        // numに+5ずつしていく = 5行ずつ追加する
        num += 2;
        $(this)
          .parent()
          .find("li:lt(" + num + ")")
          .slideDown();
        // liの数よりnumが多い時、
        if (listItems <= num) {
          // もっと見るボタン非表示
          $(".btn-more").hide();
          // 閉じるボタン表示
          $(".btn-close").show();
          // 閉じるボタンがクリックされたら、
          $(".btn-close").click(function () {
            $(this)
              .parent()
              .find("li:gt(" + closeNum + ")")
              // 6行目以降は非表示
              .slideUp();
            // 閉じるボタンを非表示
            $(this).hide();
            // もっと見るボタン表示に
            $(".btn-more").show();
          });
        }
      });
    });
  });