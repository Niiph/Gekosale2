<?php
/**
 * Gekosale, Open Source E-Commerce Solution
 * http://www.gekosale.pl
 *
 * Copyright (c) 2008-2013 WellCommerce sp. z o.o.. Zabronione jest usuwanie informacji o licencji i autorach.
 *
 * This library is free software; you can redistribute it and/or 
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version. 
 * 
 * 
 * $Revision: 520 $
 * $Author: gekosale $
 * $Date: 2011-09-08 13:37:54 +0200 (Cz, 08 wrz 2011) $
 * $Id: layoutbox.php 520 2011-09-08 11:37:54Z gekosale $ 
 */

namespace Gekosale;
use FormEngine;

class SlideShowBoxModel extends Component\Model
{

	public function _addFieldsContentTypeSlideShowBox ($form, $boxContent)
	{
		$ct_SlideShowBox = $form->AddChild(new FormEngine\Elements\Fieldset(Array(
			'name' => 'ct_SlideShowBox',
			'label' => _('TXT_LAYOUT_BOX_CONTENT_SETTINGS')
		)));
		
		$ct_SlideShowBox->AddDependency(new FormEngine\Dependency(FormEngine\Dependency::SHOW, $boxContent, new FormEngine\Conditions\Equals('SlideShowBox')));
		
		for ($i = 1; $i <= 10; $i ++){
			
			$ct_SlideShowBox->AddChild(new FormEngine\Elements\LocalFile(Array(
				'name' => 'image' . $i,
				'label' => 'Obraz ' . $i,
				'file_source' => 'design/_images_frontend/upload/'
			)));
			
			$ct_SlideShowBox->AddChild(new FormEngine\Elements\TextField(Array(
				'name' => 'caption' . $i,
				'label' => 'Opis linku ' . $i
			)));
			
			$ct_SlideShowBox->AddChild(new FormEngine\Elements\TextField(Array(
				'name' => 'url' . $i,
				'label' => 'Adres strony po kliknięciu',
				'comment' => 'Linkując wewnątrz sklepu możesz podawać samą nazwę kontrolera np. kontakt, promocje.'
			)));
		}
	
	}

	public function _populateFieldsContentTypeSlideShowBox (&$populate, $ctValues = Array())
	{
		for ($i = 1; $i <= 10; $i ++){
			$populate['ct_SlideShowBox']['image' . $i] = '';
			isset($ctValues['url' . $i]) and $populate['ct_SlideShowBox']['url' . $i] = $ctValues['url' . $i];
			isset($ctValues['caption' . $i]) and $populate['ct_SlideShowBox']['caption' . $i] = $ctValues['caption' . $i];
			isset($ctValues['image' . $i]) and $populate['ct_SlideShowBox']['image' . $i] = Array(
				'file' => substr($ctValues['image' . $i], strlen('design/_images_frontend/upload/'))
			);
		}
		return $populate;
	}
}