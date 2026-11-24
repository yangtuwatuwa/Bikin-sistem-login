export default function PageHeading({ title }) {
  return (
    <div className="page-heading">
      <div>
        <p className="eyebrow">RINGKASAN</p>
        <h1>{title}</h1>
      </div>
      <div className="breadcrumb">Beranda <span>/</span> {title}</div>
    </div>
  )
}
