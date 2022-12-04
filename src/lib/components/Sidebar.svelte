<script>
    import GithubIcon from "./socialicons/GithubIcon.svelte";
    import LinkedinIcon from "./socialicons/LinkedinIcon.svelte";
    import MailIcon from "./socialicons/MailIcon.svelte";
</script>

<div class="sidebar">
    <GithubIcon />
    <LinkedinIcon />
    <MailIcon />
</div>

<style>
    .sidebar {
        position: fixed;
        bottom: 50%;
        left: 0;
    }
</style>