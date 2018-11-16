import { faCcPaypal, faGooglePlusG, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const siteUrl = (encode: boolean): string => {
  const url: string = window.location.origin;
  return encode ? url.replace(':', '%3A').replace(/\//g, '%2F') : url;
};

export default ({
    'PayPal': {
        id: 'PayPal-btn', className: 'share-btn', tooltipClassName:'tooltip', iconComponent: faCcPaypal, 
        tooltipText: 'Support our site via PayPal!', iconColor: '#8AD4DF',
        iconClick: () => window.open('https://www.paypal.me/vescalc', '_blank')
    },
    'FbShare': {
        id: 'FbShare-btn', className: 'share-btn', tooltipClassName:'tooltip', iconComponent: faFacebook, 
        tooltipText: 'Share our site in FaceBook!', iconColor: '#4267B2',
        iconClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${siteUrl(true)}`, '_blank')
    },
    'FbLike': {
        id: 'FbLike-btn', className: 'share-btn', tooltipClassName:'tooltip', iconComponent: faThumbsUp, 
        tooltipText: 'Like our site in FaceBook!', iconColor: '#4267B2',
        iconClick: () => window.open(`https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2FVesCalc&amp;send=false&amp;layout=button_count&amp;width=125&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=verdana&amp;height=21`, '_blank')
    },
    'GPlus': {
        id: 'GoogleShare-btn', className: 'share-btn', tooltipClassName:'tooltip', iconComponent: faGooglePlusG,
        tooltipText: 'Share our site in Google+!', iconColor: '#DD5245',
        iconClick: () => window.open(`https://plus.google.com/share?url=${siteUrl(true)}`, '_blank') 
    },
    'Twitter': {
        id: 'Twitter-btn', className: 'share-btn', tooltipClassName:'tooltip', iconComponent: faTwitter,
        tooltipText: 'Share our site in Twitter!', iconColor: '#1DA1F2',
        iconClick: () => window.open(`https://twitter.com/intent/tweet?text=Calculate%20Your%20Vesicles%20Content%20And%20More&url=${siteUrl(false)}`, '_blank')
    },
})