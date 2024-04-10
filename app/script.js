if (typeof window !== "undefined") {
  (function (d, w, c) {
    w.BrevoConversationsID = "6501d45c13b07006f3538b03";
    w[c] =
      w[c] ||
      function () {
        (w[c].q = w[c].q || []).push(arguments);
      };
    var s = d.createElement("script");
    s.async = true;
    s.src = "https://conversations-widget.brevo.com/brevo-conversations.js";
    if (d.head) d.head.appendChild(s);
  })(document, window, "BrevoConversations");
}
