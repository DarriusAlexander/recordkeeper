
    <div id="photocontent" class="fl">
   
    
   <div >
       <div id="pagephoto" class="img">




<div  class="overlay">
<?php foreach($page->slideshow()->yaml() as $image): ?>   
  <?php if($image = $page->image($image)): ?>
   <a href="<?= $image->link() ?>"> <?= $image->crop(158,105)->html(); ?> </a>	    
  <?php endif ?>
<?php endforeach; ?>


  </div>



</div>


</div></div>
