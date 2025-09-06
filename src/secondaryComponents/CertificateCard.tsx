
type CertificatedCardProps = {
img: string;
certificateTitle: string;
description: string;
};


export default function CertificateCard({img, certificateTitle, description}: CertificatedCardProps) {
  return (
    <div>
            <img src={img} alt="" />
            <div>{certificateTitle}</div>
<div>{description}</div>

    </div>
  )
}
