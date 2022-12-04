<script>
    import GithubIcon from "./socialicons/GithubIcon.svelte";
    import LinkedinIcon from "./socialicons/LinkedinIcon.svelte";
    import MailIcon from "./socialicons/MailIcon.svelte";
    let y;
</script>

<div class="bottom-spacer bottom-layer"></div>
<footer>
    <div class="flex">
        <GithubIcon />
        <LinkedinIcon />
        <MailIcon />
    </div>
    <p>© 2022-present Philip Scheidl.</p>
</footer>


<style>
    footer {
        text-align: center;
        background-color: var(--primary-color);
        padding-bottom: 10px;
    }
    p {
        color: var(--grey);
    }
</style>