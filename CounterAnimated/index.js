const counter = document.querySelectorAll('.counter');
const speed = 200;


counter.forEach(counter => {
    const UpdateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(UpdateCount, 1)
        } else {
            count.innerText = target;
        }
    }

    UpdateCount();
})