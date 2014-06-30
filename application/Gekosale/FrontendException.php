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
 * $Revision: 438 $
 * $Author: gekosale $
 * $Date: 2011-08-27 11:29:36 +0200 (So, 27 sie 2011) $
 * $Id: frontendexception.class.php 438 2011-08-27 09:29:36Z gekosale $ 
 */

namespace Gekosale;

class FrontendException extends BaseException
{

	public function __construct ($message, $code = 0, $messageToLogFile = NULL)
	{
		parent::__construct($message, $code, $messageToLogFile);
		if (__ENABLE_DEBUG__ == 0){
			App::redirectSeo(App::getURLAdress());
		}
		$this->errorDesignPath = ROOTPATH . 'design/frontend/core/error/index/index.tpl';
		App::getModel('template')->assign('SHOP_NAME', App::getRegistry()->session->getActiveShopName());
		App::getModel('template')->assign('error', $this->errorText);
		App::getModel('template')->assign('BASE_URL', App::getURLAdress());
		App::getModel('template')->display($this->errorDesignPath);
		die();
	}
}