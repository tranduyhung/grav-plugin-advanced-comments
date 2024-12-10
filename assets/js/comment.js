jQuery('document').ready(function() {
    if (jQuery(window.location.hash).length > 0) {
        jQuery('html, body').animate({ scrollTop: jQuery(window.location.hash).offset().top}, 1000);
    }

    pell.init({
        element: document.getElementById('editor'),
        defaultParagraphSeparator: 'p',
        styleWithCSS: false,
        actions: [
            'bold',
            'italic',
            'underline',
            {
                name: 'link',
                icon: commentLinkIcon,
                title: 'Link',
                result: function result() {
                  var url = window.prompt('Enter the link URL');

                  if (url) {
                    pell.exec('createLink', url);
                  }
                }
              },
        ],
        onChange: function(html) {
            jQuery('#text').val(html);
        }
      })
});