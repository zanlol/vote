$(document).ready(function() {
    let voteCount = 0;
    $('#voteBtn').click(function() {
        voteCount++;
        $('#voteCount').text('Votes: ' + voteCount);
        // Send an AJAX request to the server to save the vote
        $.post('/vote', { count: voteCount });
    });
});
