/**
 * Internal dependencies
 */
import { formatPrice } from '@/utils';

export const canceledContent = `
I regret to inform you that your order has been canceled. I want to personally express my sincere apologies for the cancellation of your order. I understand that this may be disappointing, and I apologize for any inconvenience caused. If you have any questions or require further assistance, please feel free to reach out to me.

Although your current order couldn't be fulfilled, I invite you to explore my collection of other dolls available for adoption. I take pride in offering a diverse range of beautiful and unique dolls, each waiting for a loving home. Take a moment to browse through the selection, and you might just find the perfect companion.
                        
I appreciate your support, and I hope to have the opportunity to provide you with a better experience in the future.
                        
**Best regards,**
                        
Weronika Repsch
Owner, At - My Charming Dolls
`;

export const getSuccessContent = (
	description: string,
	price: number,
	email: string
) => `
**Congratulations! Your doll has found a loving new home.**
                        
I want to personally thank you for adopting one of my dolls. It brings me great joy to know that my creations are being enjoyed and appreciated by kind-hearted individuals like you.
                            
Your purchase has helped support my small business and allowed me to continue creating unique and one-of-a-kind dolls. Without customers like you, this would not be possible.
                            
**Below you will find details of your payment for your records:**
                            
- Doll Name: **${description}**
- Price: **${formatPrice(price / 100)}**
                            
An email confirmation will be automatically sent to **${email}** for your reference.
                            
Once again, thank you for adopting one of my dolls. If you have any questions or concerns, please feel free to contact me. I hope your new companion brings you many years of happiness.
               
**Best regards,**
                            
Weronika Repsch Owner of My Charming Dolls
`;
