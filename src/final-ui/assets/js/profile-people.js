document.addEventListener("DOMContentLoaded", function() {
    // Prepare the preview for profile picture
    document.getElementById("profile-picture").addEventListener("change", function() {
        readProfilePictureURL(this);
    });
});

function readProfilePictureURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('profilePicturePreview').src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}