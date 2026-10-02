
type CertificatedCardProps = {
img: string;
certificateTitle: string;
description: string;
};


export default function CertificateCard({img, certificateTitle, description}: CertificatedCardProps) {
  return (
    <div>
            <img loading="lazy" src={img} alt="" />
            <div>{certificateTitle}</div>
<div>{description}</div>

    </div>
  )
}
