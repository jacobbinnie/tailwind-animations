interface ManageAccessButtonProps {}

function ManageAccessButton({}: ManageAccessButtonProps) {
  const handleManageAccess = () => {
    // logic here
  };

  return (
    <div className="flex">
      <p className="text-sm hidden sm:block text-gray-300 cursor-pointer">
        Manage access
      </p>
    </div>
  );
}

export default ManageAccessButton;
