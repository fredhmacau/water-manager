from infobip_api_client.api_client import ApiClient, Configuration
from infobip_api_client.model.sms_advanced_textual_request import SmsAdvancedTextualRequest
from infobip_api_client.model.sms_destination import SmsDestination
from infobip_api_client.model.sms_response import SmsResponse
from infobip_api_client.model.sms_textual_message import SmsTextualMessage
from infobip_api_client.api.send_sms_api import SendSmsApi
from infobip_api_client.exceptions import ApiException
from logging import log
#config msg 

def sender_sms(content,contact):


    """
    * Send an sms message by using Infobip API.
    *
    * This example is already pre-populated with your account data:
    * 1. Your account Base URL
    * 2. Your account API key
    * 3. Your recipient phone number
    *
    * THIS CODE EXAMPLE IS READY BY DEFAULT. HIT RUN TO SEND THE MESSAGE!
    *
    * Send sms API reference: https://www.infobip.com/docs/api#channels/sms/send-sms-message
    * See Readme file for details.
    """

    BASE_URL = "https://89j429.api.infobip.com"
    API_KEY = "1561b64ff17845d043f9f03028089e93-ad1ab2e8-b2cf-4663-96ed-8972b3c3129c"

    SENDER = "InfoSMS"
    RECIPIENT = f"244{contact}"
    MESSAGE_TEXT = f"""Saudações, seja bem-vindo a plataforma de gerenciamento e monitoramento do consumo de água, a sua senha é: {content}.Podes eventualmente altera-lá mais tarde."""

    client_config = Configuration(
            host= BASE_URL,
            api_key={"APIKeyHeader": API_KEY},
            api_key_prefix={"APIKeyHeader": "App"},
        )

    api_client = ApiClient(client_config)

    sms_request = SmsAdvancedTextualRequest(
            messages=[
                SmsTextualMessage(
                    destinations=[
                        SmsDestination(
                            to=RECIPIENT,
                        ),
                    ],
                    _from=SENDER,
                    text=MESSAGE_TEXT,
                )
            ])

    api_instance = SendSmsApi(api_client)

    try:
        api_response: SmsResponse = api_instance.send_sms_message(sms_advanced_textual_request=sms_request)
        print(api_response)
    except ApiException as ex:
        print("Error occurred while trying to send SMS message.")
        print(ex)

def sender_sms_finish(resident_name,packageName,contact):


    """
    * Send an sms message by using Infobip API.
    *
    * This example is already pre-populated with your account data:
    * 1. Your account Base URL
    * 2. Your account API key
    * 3. Your recipient phone number
    *
    * THIS CODE EXAMPLE IS READY BY DEFAULT. HIT RUN TO SEND THE MESSAGE!
    *
    * Send sms API reference: https://www.infobip.com/docs/api#channels/sms/send-sms-message
    * See Readme file for details.
    """

    BASE_URL = "https://vjznxp.api.infobip.com"
    API_KEY = "ba9aae525c4887fb1126df80a64ddc61-3c7092d0-146b-4c4e-a0d4-7ca7dffb85e1"

    SENDER = "InfoSMS"
    RECIPIENT = f"244{contact}"
    MESSAGE_TEXT = f"""{resident_name} terminou o volume do seu {packageName}, faça um recarregamento para voltar a usufruir os serviços."""

    client_config = Configuration(
            host= BASE_URL,
            api_key={"APIKeyHeader": API_KEY},
            api_key_prefix={"APIKeyHeader": "App"},
        )

    api_client = ApiClient(client_config)

    sms_request = SmsAdvancedTextualRequest(
            messages=[
                SmsTextualMessage(
                    destinations=[
                        SmsDestination(
                            to=RECIPIENT,
                        ),
                    ],
                    _from=SENDER,
                    text=MESSAGE_TEXT,
                )
            ])

    api_instance = SendSmsApi(api_client)

    try:
        api_response: SmsResponse = api_instance.send_sms_message(sms_advanced_textual_request=sms_request)
        print(api_response)
    except ApiException as ex:
        print("Error occurred while trying to send SMS message.")
        print(ex)
