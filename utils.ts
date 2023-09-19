export const error_handle = (err_msg: string, status_code: number) => {
  return Response.json({
    error: {
      status: status_code,
      message: err_msg,
    }
  }, { status: status_code })
}
