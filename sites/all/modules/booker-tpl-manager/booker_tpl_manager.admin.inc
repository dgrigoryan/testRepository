<?php
/*
* Implementation of settings form.
*/
function booker_tpl_manager_settings() {
    $form['main'] = array(
        '#type' => 'container'
    );
    $form['main']['refresh'] = array(
        '#type' => 'submit',
        '#value' => t('Refresh list'),
        '#submit' => array('_booker_tpl_manager_set_list')
    );
    $form['main']['list'] = array(
        '#markup' => '
        <p>'.t('Page teplates path:').' <em>'.drupal_get_path('theme', variable_get('theme_default', NULL)).'/templates</em></p>
        <h2>'.t('Custom templates list').'</h2>
        '._booker_tpl_manager_output_list().'
        '
    );

    return $form;
}
/*
* Implementation of output function for the tpl list.
*/
function _booker_tpl_manager_output_list() {
    $tplList = _booker_tpl_manager_get_list();
    $output = '';

    foreach ($tplList as $key => $value) {        
            $output .= '<li>'.$value.'</li>';
    }
    if (empty($output)){
        $output = '<p>'.t('There is no custom templates').'</p>';
    } else {
        $output = '<ul>'.$output.'</ul>';   
    }
    
    return $output;
}