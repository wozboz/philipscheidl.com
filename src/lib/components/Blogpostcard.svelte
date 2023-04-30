<script>
    export let posttitle="Placeholdertitle";
    export let postdate="01.01.01";
    export let postlink="#"
    export let postdescription="Description goes here"
</script>

<div class="blogpostcard">
    <div class="blogcontentcontainer">
        <h2>{posttitle}</h2>
        <h3>{postdate}</h3>
        <p>{postdescription}</p>
        <h3 class="hovereffect readmore"><a class="disable" href={postlink}>Read More</a></h3>
    </div>
</div>