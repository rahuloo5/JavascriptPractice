class Twitter {
    constructor() {
        this.tweets = new Map();
        this.followees = new Map();
        this.timestamp = 0;
    }

    postTweet(userId, tweetId) {
        this.timestamp++;
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).unshift({ timestamp: this.timestamp, tweetId });
    }

    getNewsFeed(userId) {
        let feed = [];
        if (!this.tweets.has(userId) && !this.followees.has(userId)) {
            return feed;
        }
        let usersToFollow = new Set(this.followees.get(userId) || []);
        usersToFollow.add(userId); // Include user's own tweets

        let tweets = [];
        for (let userId of usersToFollow) {
            if (this.tweets.has(userId)) {
                tweets.push(...this.tweets.get(userId));
            }
        }

        tweets.sort((a, b) => b.timestamp - a.timestamp); // Sort by timestamp descending
        for (let i = 0; i < Math.min(10, tweets.length); i++) {
            feed.push(tweets[i].tweetId);
        }
        return feed;
    }

    follow(followerId, followeeId) {
        if (!this.followees.has(followerId)) {
            this.followees.set(followerId, new Set());
        }
        this.followees.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.followees.has(followerId)) {
            this.followees.get(followerId).delete(followeeId);
        }
    }
}
