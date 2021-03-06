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
 * $Revision: 619 $
 * $Author: gekosale $
 * $Date: 2011-12-19 22:09:00 +0100 (Pn, 19 gru 2011) $
 * $Id: news.php 619 2011-12-19 21:09:00Z gekosale $ 
 */
namespace Gekosale;

use FormEngine;

class CurrenciesListForm extends Component\Form
{
	protected $populateData;

	public function setPopulateData ($Data)
	{
		$this->populateData = $Data;
	}

	public function initForm ()
	{
		$form = new FormEngine\Elements\Form(Array(
			'name' => 'currencieslist',
			'action' => '',
			'method' => 'post'
		));
		
		$requiredData = $form->AddChild(new FormEngine\Elements\Fieldset(Array(
			'name' => 'required_data',
			'label' => _('TXT_MAIN_DATA')
		)));
		
		$requiredData->AddChild(new FormEngine\Elements\TextField(Array(
			'name' => 'name',
			'label' => _('TXT_CURRENCY_NAME'),
			'rules' => Array(
				new FormEngine\Rules\Required(_('ERR_EMPTY_NAME'))
			)
		)));
		
		$requiredData->AddChild(new FormEngine\Elements\Select(Array(
			'name' => 'symbol',
			'label' => _('TXT_CURRENCY_SYMBOL'),
			'options' => FormEngine\Option::Make(App::getModel('currencieslist')->getCurrenciesALLToSelect()),
			'rules' => Array(
				new FormEngine\Rules\Required(_('ERR_EMPTY_CURRENCY_SYMBOL'))
			)
		)));
		
		$requiredData->AddChild(new FormEngine\Elements\TextField(Array(
			'name' => 'decimalseparator',
			'label' => _('TXT_CURRENCY_DECIMAL_SEPARATOR'),
			'rules' => Array(
				new FormEngine\Rules\Required(_('ERR_EMPTY_CURRENCY_DECIMAL_SEPARATOR'))
			)
		)));
		
		$requiredData->AddChild(new FormEngine\Elements\TextField(Array(
			'name' => 'decimalcount',
			'label' => _('TXT_CURRENCY_DECIMAL_COUNT'),
			'rules' => Array(
				new FormEngine\Rules\Required(_('ERR_EMPTY_CURRENCY_DECIMAL_COUNT'))
			)
		)));
		
		$requiredData->AddChild(new FormEngine\Elements\TextField(Array(
			'name' => 'thousandseparator',
			'label' => _('TXT_CURRENCY_THOUSAND_SEPARATOR')
		)));
		
		$requiredData->AddChild(new FormEngine\Elements\TextField(Array(
			'name' => 'positivepreffix',
			'label' => _('TXT_CURRENCY_POSITIVE_PREFFIX')
		)));
		
		$requiredData->AddChild(new FormEngine\Elements\TextField(Array(
			'name' => 'positivesuffix',
			'label' => _('TXT_CURRENCY_POSITIVE_SUFFIX')
		)));
		
		$requiredData->AddChild(new FormEngine\Elements\TextField(Array(
			'name' => 'negativepreffix',
			'label' => _('TXT_CURRENCY_NEGATIVE_PREFFIX')
		)));
		
		$requiredData->AddChild(new FormEngine\Elements\TextField(Array(
			'name' => 'negativesuffix',
			'label' => _('TXT_CURRENCY_NEGATIVE_SUFFIX')
		)));
		
		$exchangeData = $form->AddChild(new FormEngine\Elements\Fieldset(Array(
			'name' => 'exchange_data',
			'label' => _('TXT_CURRENCY_EXCHANGE')
		)));
		
		$currencies = App::getModel('currencieslist')->getCurrencies();
		
		foreach ($currencies as $key => $currency){
			
			$exchangeData->AddChild(new FormEngine\Elements\TextField(Array(
				'name' => 'currency_' . $currency['idcurrency'],
				'label' => $currency['currencysymbol'],
				'filters' => Array(
					new FormEngine\Filters\CommaToDotChanger()
				)
			)));
		}
		
		$layerData = $form->AddChild(new FormEngine\Elements\Fieldset(Array(
			'name' => 'view_data',
			'label' => _('TXT_STORES')
		)));
		
		$layerData->AddChild(new FormEngine\Elements\LayerSelector(Array(
			'name' => 'view',
			'label' => _('TXT_VIEW'),
			'default' => Helper::getViewIdsDefault()
		)));
		
		$Data = Event::dispatch($this, 'admin.currencieslist.initForm', Array(
			'form' => $form,
			'id' => (int) $this->registry->core->getParam(),
			'data' => $this->populateData
		));
		
		if (! empty($Data)){
			$form->Populate($Data);
		}
		
		$form->AddFilter(new FormEngine\Filters\NoCode());
		$form->AddFilter(new FormEngine\Filters\Secure());
		
		return $form;
	}
}