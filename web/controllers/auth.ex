defmodule KrishedgesSpace.Auth do
  import Plug.Conn
  import Comeonin.Bcrypt, only: [checkpw: 2, dummy_checkpw: 0]

  def login_by_username_and_pass(conn, user, given_pass) do
    if checkpw(given_pass, user.password_hash) do
      case user.role do
        "admin" ->
          Guardian.encode_and_sign(user, :api, perms: %{ admin: [:all]})
        "editor" ->
          Guardian.encode_and_sign(user, :api, perms: %{ editor: [:content, :publish]})
        "author" ->
          Guardian.encode_and_sign(user, :api, perms: %{ author: [:content]})
        _ ->
          Guardian.encode_and_sign(user, :api)
      end
    else
      {:error, :unauthorized, conn}
    end
  end

  def has_permission_from_claims(roles_list, claims) do
    Enum.any?(roles_list, fn(role)-> Guardian.Permissions.from_claims(elem(claims,1), role) == 1 end)
  end

end
