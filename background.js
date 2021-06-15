// Retrieves the url from the loaded page.
var idInfoUrl = window.location.href

// Checks if the url is that of a channel.
if (idInfoUrl.indexOf("youtube.com/channel/")!== -1){ 
    let channelId = idInfoUrl.split('/');
    channelId = channelId[4];
    copyToClipboard(channelId);
}

// Checks if the url is that of a video.
if (idInfoUrl.indexOf("youtube.com/watch?v")!== -1){ 
    let videoId = idInfoUrl.split('/');
    videoId = videoId[3].split(/[=&]/)[1];
    copyToClipboard(videoId);
}

// Copies either videoId or channelId to the clipboard.
function copyToClipboard(idRef) { 
    navigator.clipboard.writeText(idRef).then(function() {
      console.log('Completed: ID copied successfully.')
    }, function(err) {
      console.error('Failed: Could not copy ID: ', err)
    })
  }