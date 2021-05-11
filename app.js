var app = new Vue({
    el: '#app',
    data() {
        return {
            picture: 0,
            images: []
        }
    },
    methods: {

    },
    mounted() {
        var history = [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120];
        var t = this;
        setInterval(function() {
            t.picture++;
            if (t.picture >= history.length) {
                t.picture = 0;
            }
        }, 200);

        history.forEach(function(interval) {
            var url = [];
            var date = new Date();
            url.push(date.getUTCFullYear());
            url.push(("0" + (date.getUTCMonth() + 1)).slice(-2));
            url.push(("0" + date.getUTCDate()).slice(-2));

            var minutes = date.getUTCMinutes();
            var dif = minutes % 5;
            var timeTwo = new Date(date.getTime() - (((dif + interval) * 60) * 1000));
            url.push(("0" + timeTwo.getUTCHours()).slice(-2));
            url.push(("0" + timeTwo.getUTCMinutes()).slice(-2));
            t.images.push('https://ru.sat24.com/image?type=visual&region=uk&timestamp=' + url.join(''));
        })
    },
    beforeMount() {
    }
});
