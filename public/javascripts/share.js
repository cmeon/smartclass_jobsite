(function () {
    const btns = document.querySelectorAll('.share');

    // Share must be triggered by "user activation"
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', async () => {
            const shareData = {
                title: btns[i].getAttribute("x-data-title"),
                text: btns[i].getAttribute("x-data-text"),
                url: btns[i].getAttribute("x-data-url")
            }

            await navigator.share(shareData)

            ev.stopPropagation()
        })
    }
})()