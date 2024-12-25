<script lang="ts">
    export let title: string = "Card";
    export let image: string = "/img/cat.jpg";
    export let description: string = "This is a card component";
    export let link: string = "/card";
    export let button_text: string = "Click Me";

</script>

<div class="h-96 w-80 rounded-3xl overflow-hidden bg-white transition">
    <div class="h-1/2 overflow-hidden ">
        <img src={image} alt="img">
    </div>
    <div class="p-4 h-1/2 flex flex-col justify-between">
        <div class="">
            <h1 class="text-4xl font-bold">{title}</h1>
            <p class="text-lg font-thin pt-1">{description}</p>
        </div>
        <div class="self-end">
            <a class="bg-primary" href={link}>
                <button class="text-lg px-4 py-2 w-40 h-12 bg-primary-400 text-white font-semibold rounded-2xl shadow-md hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-75 transition">
                    {button_text}
                </button>
            </a>
        </div>
    </div>

</div>