"use strict";
var Review = (function () {
    function Review(id, name, comment, score) {
        this.id = id;
        this.name = name;
        this.comment = comment;
        this.score = score;
    }
    return Review;
}());
exports.Review = Review;
var ReviewService = (function () {
    function ReviewService() {
    }
    ReviewService.prototype.getReviews = function () {
        var reviews = [
            new Review(0, "Rachel Kelly", "Exciting Movie", 2),
            new Review(1, "charlie haleway", "bad...", 1),
            new Review(2, "alex Roger", "pretty good!", 4),
            new Review(3, "Sabrina Lipton", "Not bad...", 4),
            new Review(4, "sarah Richardson", "Nice...", 1),
            new Review(5, "tanya athenbury", "Awful", 2),
            new Review(6, "Phillip Stevens", "Loved it", 2),
            new Review(7, "Dennis tuckerman", "AMAZING!!", 5),
            new Review(8, "Dean Rice", "pretty amazing!", 4),
            new Review(9, "ferdinant ewel", "good movie", 4),
            new Review(10, "Grace Nolan", "Nice", 3),
            new Review(11, "Tessa silverman", "i want a refund", 1),
            new Review(12, "Ruth Fallow", "Good!!", 5),
            new Review(13, "helga faust", "okay..", 5),
            new Review(14, "heather gale", "It Was good", 3),
            new Review(15, "adam caway", "sick!", 3),
            new Review(16, "Dennis mcdowd", "very funny", 5),
            new Review(17, "Alice Ridgford", "good!", 4),
        ];
        return reviews;
    };
    return ReviewService;
}());
exports.ReviewService = ReviewService;
//# sourceMappingURL=review-service.js.map