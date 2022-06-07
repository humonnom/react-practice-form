export default function Input({
  type,
  id,
  value,
  onChangeValue,
  onChangeChecked,
}: any) {
  // type: text, password, tel, email, checkbox

  {
    /* <input type={type} id={id} value={value} onChange={onChange} /> */
  }

  if (type === "text")
    return <input type={type} id={id} value={value} onChange={onChangeValue} />;
  else if (type === "password")
    return <input type={type} id={id} value={value} onChange={onChangeValue} />;
  else if (type === "tel")
    return (
      <input
        type={type}
        id={id}
        value={value}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // should update pattern
        onChange={onChangeValue}
      />
    );
  else if (type === "email")
    return (
      <input
        type={type}
        id={id}
        value={value}
        pattern=".+@globex\.com" // should update pattern
        onChange={onChangeValue}
      />
    );
  else if (type === "checkbox")
    return (
      <input type={type} id={id} checked={value} onChange={onChangeChecked} />
    );
  else return <></>;
}
