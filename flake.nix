{
  description = "Flake to develop the CDapp using nix(OS)";

  inputs = {
    # node 20.11.1
    nixpkgs_node.url = "github:NixOS/nixpkgs/4f1d724b82db61237b5d7c669841b5f596e08e7f";
  };

  outputs = {
    self,
    nixpkgs_node
  }: {
    devShell.x86_64-linux = with nixpkgs_node.legacyPackages.x86_64-linux;
      mkShell {
        buildInputs = [nodejs_20 nodePackages.pnpm zsh];
        shellHook = ''
          if [ -n "$SHELL" ]; then
            exec $SHELL
          fi
        '';
      };
  };
}
