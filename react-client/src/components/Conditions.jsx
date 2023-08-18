import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function Conditions()
{
    return(
        <div>
            <h2>NestHub API Terms and Conditions</h2>
            <p className="lead">

These Terms and Conditions ("Agreement") govern your use of the NestHub API ("API") provided by NestHub, a platform specializing in rental property services. By accessing or using the API, you agree to be bound by the terms and conditions outlined below. If you do not agree with these terms, you should not use the API.

1. API Usage and Access

1.1. The API is intended for developers, partners, and businesses who wish to integrate NestHub's rental property services into their applications or platforms.

1.2. Access to the API is subject to approval by NestHub. NestHub reserves the right to grant or deny access to the API at its sole discretion.

2. API Guidelines

2.1. You agree to use the API in compliance with these terms and any additional guidelines or documentation provided by NestHub.

2.2. You shall not use the API for any unlawful, harmful, or abusive purposes. This includes but is not limited to unauthorized access, data scraping, spamming, or any activity that could disrupt the API's functionality or compromise user privacy.

3. Data Usage and Privacy

3.1. Your usage of the API may involve accessing and using data from NestHub's platform. You agree to handle this data in accordance with applicable data protection laws and regulations.

3.2. You shall not use any data obtained from the API for marketing purposes or share user data with third parties without explicit user consent.

4. Intellectual Property

4.1. The API, including all associated documentation, code, and content, is the property of NestHub and is protected by intellectual property laws.

4.2. You may use the API solely for the purpose of integrating NestHub's rental property services into your application or platform. You do not gain any ownership rights to the API or NestHub's intellectual property.

5. Modifications and Termination

5.1. NestHub reserves the right to modify, suspend, or terminate the API, or your access to it, at any time and for any reason without prior notice.

6. Liability

6.1. You agree that your use of the API is at your own risk. NestHub shall not be liable for any damages, losses, or liabilities arising from your use of the API.

6.2. You agree to indemnify and hold NestHub harmless from any claims, demands, or actions resulting from your use of the API.

7. Changes to Terms

7.1. NestHub may update or modify these terms at any time. Any changes will be effective upon posting the revised terms on the NestHub website.

8. Governing Law

8.1. This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.

By using the NestHub API, you acknowledge that you have read, understood, and agree to abide by these Terms and Conditions. If you do not agree to these terms, you should not use the API.

Last updated: September 19 2021
            </p>
        </div>
    )
}

export default Conditions;