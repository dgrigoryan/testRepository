<?php if (!empty($requisitions[0])): ?>
<div class="container-12 view-job-list">
<?php foreach ($requisitions as $column) { ?>
<div class="grid-4">
<?php foreach ($column as $cat => $jobs) { ?>
<h3 class="job-category-title uppercase"><?php echo $cat; ?></h3>
<?php foreach ($jobs as $job) {
if (arg(0) === 'node' && arg(1) == $job['nid']) {
  $actClass = 'active-publication';
} else {
  $actClass = '';
}
?>
<div class="company-careers-job-preview <?php echo $actClass; ?>">
  <a href="<?php echo url('node/'.$job['nid']); ?>" rel="node_<?php echo $job['nid']; ?>"><?php echo $job['title']; ?></a>
</div>
<?php } 
} ?>
</div>
<?php } ?>
</div>
<?php endif; ?>