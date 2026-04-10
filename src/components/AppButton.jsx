function AppButton({
  text,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false
}) {
  const classes = `app-button app-button--${variant} ${disabled ? 'is-disabled' : ''}`.trim();

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default AppButton;
