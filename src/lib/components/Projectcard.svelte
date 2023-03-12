<script>
    export let projecttitle = "Placeholdertitle";
    export let projectdate="01.01.01";
    export let projectlink="#"
    export let projectdescription="Description goes here"
</script>

<div class="blogpostcard">
    <div class="projectimage"></div>
    <div class="blogcontentcontainer">
        <h1>{projecttitle}</h1>
        <h2>{projectdate}</h2>
        <p>{projectdescription}</p>
        <h3 class="hovereffect readmore"><a class="disable" href={projectlink}>Read More</a></h3>
    </div>
</div>

<style>
    .projectimage {
        width: 100%;
        height: 200px;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url(../assets/dashboard_middle.png);
        border-radius: 15px 15px 0px 0px;
    }
</style>